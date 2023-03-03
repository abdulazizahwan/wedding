const robotsTxt = `User-agent: *
Disallow: /admin`;

export const getServerSideProps = async ({ res }) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write(robotsTxt);
    res.end();
    return { props: {} };
};

const Robots = () => null;
export default Robots;
