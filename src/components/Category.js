import React from 'react';

function Category(props){
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow ">
                    <div className={`text-xs font-weight-bold text-uppercase mb-1`}> { props.title }: { props.value }</div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Category;