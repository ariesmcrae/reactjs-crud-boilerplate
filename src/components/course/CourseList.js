import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import CourseListRow from './CourseListRow';


function getCaret(direction) {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
}



export class CourseList extends React.Component {

    constructor() {
        super();

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };
    }




    render() {
        const selectRow = {
            mode: 'radio',
            bgColor: 'rgb(238, 193, 213)',
            onSelect: this.props.handleRowSelect
        };
    
        return (
            <BootstrapTable data={this.props.courses}  selectRow={selectRow}  options={this.options} bordered={false} striped>
                <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField='title' 
                    dataSort={true} 
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                >
                    Title
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField='length' 
                    dataSort={true}
                    caretRender={getCaret}
                >
                    Length
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField='category' 
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                >
                    Category
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField='authorId' 
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                >
                    Author
                </TableHeaderColumn>                                
            </BootstrapTable>
        );
    }

}



CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default CourseList;