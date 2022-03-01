const floatInit = () => {
    const MAX_FLOAT_OFFSET = 150;
    const floatingElems = document.querySelectorAll(".floating-element");

    let initialPositions = [];
    floatingElems.forEach((elem) => {
        initialPositions.push(elem.getBoundingClientRect().y + window.scrollY);
        elem.style.transform = `translateY(-${MAX_FLOAT_OFFSET}px)`;
    });

    const updatePositions = () => {
        floatingElems.forEach((elem, i) => {
            let scrollOffset = window.scrollY + window.innerHeight;
            if (
                scrollOffset > initialPositions[i] - MAX_FLOAT_OFFSET &&
                scrollOffset + MAX_FLOAT_OFFSET - initialPositions[i] <
                    2 * MAX_FLOAT_OFFSET + window.innerHeight
            ) {
                let offset = Math.round(
                    2 *
                        MAX_FLOAT_OFFSET *
                        ((scrollOffset + MAX_FLOAT_OFFSET - initialPositions[i]) /
                            (2 * MAX_FLOAT_OFFSET + window.innerHeight)) -
                        MAX_FLOAT_OFFSET
                );
                elem.style.transform = `translateY(${offset}px)`;
            }
        });
    };

    document.addEventListener("scroll", updatePositions);
    updatePositions();
};

floatInit();