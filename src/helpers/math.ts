export const roundingValue = (value: number): string => {
    let percent = 0;
    
    if (value > 1) {
        percent = 6;
    }
    
    if (value > 100000) {
        percent = 2;
    }

    if (value < 1 && value > 0) {
        let startValue = value;

        while (startValue < 1) {
            percent++;
            startValue *= 10;
        }

        percent++;
    }

    return value.toFixed(percent);
}