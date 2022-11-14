import NotificationButton from '../NotificationButton/Index';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 30));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
    return (
        <>
            <div className="vendasmeta-card">
                <h2 className="vendasmeta-sales-title">Vendas</h2>
                <div>
                    <div className="vendasmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="vendasmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="vendasmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="showsince992">ID</th>
                                <th className="showsince">Data</th>
                                <th>Vendedor</th>
                                <th className="showsince992">Visitas</th>
                                <th className="showsince992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="showsince992">#555</td>
                                <td className="showsince">09/11/2022</td>
                                <td>Vanusa</td>
                                <td className="showsince992">20</td>
                                <td className="showsince992">18</td>
                                <td>R$6300.00</td>
                                <td>
                                    <div className="vendasmeta-red-btn-container">
                                        <NotificationButton />

                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className="showsince992">#555</td>
                                <td className="showsince">09/11/2022</td>
                                <td>Vanusa</td>
                                <td className="showsince992">20</td>
                                <td className="showsince992">18</td>
                                <td>R$6300.00</td>
                                <td>
                                    <div className="vendasmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className="showsince992">#555</td>
                                <td className="showsince">09/11/2022</td>
                                <td>Vanusa</td>
                                <td className="showsince992">20</td>
                                <td className="showsince992">18</td>
                                <td>R$6300.00</td>
                                <td>
                                    <div className="vendasmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>


            </div>

        </>
    )
}

export default SalesCard;