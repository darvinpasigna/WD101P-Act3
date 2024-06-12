import Pass from './Pass';
import Fail from './Fail';

function SampleFunc(){

    let grade = 90;

    let condition1 = grade > 75;
    let condition2 = grade == 76;
    return(
        <>
        {/* ternary */}
        {/* condition ? TRUE : FALSE */}
        {condition1 ? (condition2 ? <Pass/> : <Fail/>): <Fail/>}
        </>
    )
}

export default SampleFunc;