import React from 'react'
import sectionThree from'./sectionThree.module.css'

const Section3 = () => {
    return (
        <div className={sectionThree.section}> 
            <div className={sectionThree.left}>
                <div className={sectionThree.contentPrivacy}>
                    <h1>
                        Say good-bye to other apps <br/>
                        that don't value privacy and <br/>
                        security
                    </h1>
                </div>
            </div>
            <div className={sectionThree.right}>
                <div className={sectionThree.imgPrivacy}>
                </div>
            </div>
            <div className={sectionThree.sectionFour}></div>
        </div>
    )
}

export default Section3
