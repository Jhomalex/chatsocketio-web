export const zfill = (number: number, width: number) => {
    const numberOutput = Math.abs(number); /* Valor absoluto del número */
    const length = number.toString().length; /* Largo del número */
    const zero = "0"; /* String de cero */

    if (width <= length) {
        if (number < 0) {
            return ("-" + numberOutput.toString());
        } else {
            return numberOutput.toString();
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString());
        }
    }
}