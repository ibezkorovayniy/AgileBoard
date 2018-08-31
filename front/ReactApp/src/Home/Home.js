import React, {Component} from 'react'
import Todo from "../GetData/Todo";
import Inprogress from "../GetData/Inprogress";
import Done from "../GetData/Done";
import './Home.css'

const home = () => {

        return (
            <div>
                <h1>HOME PAGE MTHFCK</h1>

                <table className="Table">
                    <thead>

                        <td>TO DO<button>Add ticket</button></td>
                        <td>IN PROGRESS<button>Add ticket</button></td>
                        <td>DONE<button>Add ticket</button></td>

                    </thead>
                    <tbody>
                    <tr>
                        <td><Todo/></td>
                        <td><Inprogress/></td>
                        <td><Done/></td>
                    </tr>
                    </tbody>
                </table>

            </div>

        )
};
export default home