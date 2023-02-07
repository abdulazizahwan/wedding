import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore, orderBy,query } from "firebase/firestore";

import { firebaseApp } from "../../firebase/firebase";

export default function MessageBox() {
  const [messages] = useCollection(
    query(
      collection(getFirestore(firebaseApp), "messages"),
      orderBy("timestamp", "desc")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div className="col-md-7 d-flex flex-column">
      <div className="bg-white messages-box rounded-1rem">
        {messages?.docs?.map((msg, i) => {
          const data = msg?.data();
          return (
            <div className="mb-5" key={i}>
              <p className="text-left mb-0">
                <b>{data?.name}</b>
              </p>
              <p className="text-left mb-1">
                <small className="text-muted text-right">
                  {data?.timestamp?.toDate().toDateString()}&nbsp; at &nbsp;
                  {data?.timestamp?.toDate().toLocaleTimeString()}
                </small>
              </p>
              <p className="text-left mb-5">{data?.message}</p>
              <div className="messages-divider"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
