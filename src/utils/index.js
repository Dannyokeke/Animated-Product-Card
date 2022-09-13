/* eslint-disable no-useless-concat */
/* eslint-disable no-fallthrough */
export const renderGradient = (colourId) => {
    let gradient ="";
    switch(colourId) {
        case 1:
            gradient = `${"to right" + ","+ "#42275a" + ","+ "#734b6d"}`;
            return gradient;
        case 2:
            gradient = `${"to right" + ","+ "#45b649" + ","+ "#a8e063"}`;
            return gradient;

        default:
            return gradient


    }
};    