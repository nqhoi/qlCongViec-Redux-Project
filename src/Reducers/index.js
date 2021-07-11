import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks, //tasks: tasks
    isDisplayForm,
    itemEditing,
    filterTable,
    search,
    sort
});

export default myReducer;