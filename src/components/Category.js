import React from 'react';

function Category(props){
    return (
        <React.Fragment>
            <div class="col-lg-6 mb-4">
                <div class="card bg-dark text-white shadow">
                    <div class="card-body">
                        { props.title }: { props.value }
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Category;