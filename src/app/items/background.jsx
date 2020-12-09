import React from 'react'

export default function LiveBackGround() {

    function setLineWidth() {
        let width = Math.floor(Math.random() * 200);
        if (width > 50) {
            return width + "px";
        } else {
            return setLineWidth();
        }
    }

    function getItemsQts(h) {
        let bgWrapperHeight = h; // height of wrapper 
        let itemsQts = Math.floor(bgWrapperHeight / 50) // 36px - height of line with margin
        return itemsQts;
    }

    function renderLines() {

        let bgLines = [];

        for (let i = 1; i <= getItemsQts(919); i++) {
            bgLines.push({ id: i, width: setLineWidth()});
        }
        return bgLines;
    }

    return <>
        <div className="bg-wrapper" >
            {renderLines().map((item, index) => <>
                <div key={index} className="bg-row" >
                    <div className="bg-line" key={index} style={{width: item.width}}></div>
                    <div className="bg-line" key={index} style={{width: item.width}}></div>
                </div>
            </>)}
        </div>
    </>
}