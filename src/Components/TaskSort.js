
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';





class TaskSort extends Component {
    
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
    }

    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by : sortBy,
            value : sortValue
        })
    }

  render() {

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick = { () => this.onClick('name',1)}> 
                            <a role="button" 
                                className= { (this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pl-2">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick = { () => this.onClick('name', -1)}>
                            <a role="button" 
                                className= { (this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-desc pl-2">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li onClick = { () => this.onClick('status',1)}>
                            <a role="button" className="pl-2" 
                                className= { (this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                        >Trạng Thái Kích Hoạt
                            </a>
                        </li>
                        <li onClick = { () => this.onClick('status', -1)}>
                            <a role="button" className="pl-2"
                                className= { (this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                        >
                            Trạng Thái Ẩn
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    );
  }
  
}

const mapStateToProps = (state) => {
    return {
        sort : state.sort
    }
}
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort : (sort) => {
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);
