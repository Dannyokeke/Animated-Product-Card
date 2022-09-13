/* eslint-disable no-useless-concat */
/* eslint-disable no-fallthrough */
export const renderGradient = (colourId) => {
    let gradient ="";
    switch(colourId) {
        case 1:
            gradient = `${"to right" + ","+ "#2193b0" + ","+ "#c4e0e5"}`;
            return gradient;
        case 2:
            gradient = `${"to right" + ","+ "#2c3e50" + ","+ "#bdc3c7"}`;
            return gradient;

        default:
            return gradient


    }
};    