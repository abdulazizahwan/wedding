const numberValidator = (e) => {
    /**
     * Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys
     **/

    const regex = new RegExp(
        /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/
    );

    return !e.key.match(regex) && e.preventDefault();
}

export { numberValidator };