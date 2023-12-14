import { useContext, useState } from "react";
import PoliceContext from "../context/PoliceStation/PoliceContext";
import { useNavigate } from "react-router-dom";
function PoliceStationRow(props) {
  const cxt = useContext(PoliceContext);

  // const {updatePolice}  = useContext(cxt);
  const navigate = useNavigate();

  const { item, i } = props;
  const { _id, pname, paddress, pcity, pstate, ppincode, plat, plong, pphone } =
    item;
  const [itemC, setItemC] = useState(JSON.parse(JSON.stringify(item)));

  console.log(itemC);
  const handleChange = (e) => {
    setItemC({ ...itemC, [e.target.id]: e.target.value });
    console.log(itemC);
  };

  // const submitUpdatePoliceStation = (e) => {
  //   e.preventDefault();
  //   console.log(item);
  //   console.log(itemC);
  //   updatePolice(itemC);
  //   navigate("#");
  // };
  // const handleDelete = () => {
  //   if (window.confirm("Are you sure?") === true) {
  //     deletePoliceStation();
  //   }
  // };
  return (
    <tr>
      <th scope="row">{i + 1}</th>
      <td>{pname}</td>
      <td>{paddress}</td>
      <td>{pcity}</td>
      <td>{pstate}</td>
      <td>{ppincode}</td>
      <td>{`${plat},${plong}`}</td>
      <td>{pphone}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#updateModal">
          Add New
        </button>

        <div
          className="modal fade"
          id="updateModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <form >
              {/* onSubmit={submitUpdatePoliceStation} */}
                <div className="modal-body">
                  <input type="hidden" name="_id" defaultValue={_id} id="_id" />
                  <div className="mb-3" style={{ textAlign: "left" }}>
                    <label htmlFor="pname" className="form-label">
                      Name
                    </label>
                    <input
                      type="name"
                      onChange={handleChange}
                      required
                      className="form-control"
                      name="pname"
                      value={itemC.pname}
                      id="pname"
                    />
                  </div>
                  <div className="mb-3" style={{ textAlign: "left" }}>
                    <label htmlFor="paddress" className="form-label">
                      Address
                    </label>
                    <input
                      defaultValue={itemC.paddress}
                      type="text"
                      onChange={handleChange}
                      required
                      className="form-control"
                      id="paddress"
                      name="paddress"
                    />
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <input
                        type="text"
                        id="pcity"
                        onChange={handleChange}
                        required
                        className="form-control"
                        defaultValue={itemC.pcity}
                        placeholder="City"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="pstate"
                        onChange={handleChange}
                        required
                        className="form-control"
                        defaultValue={itemC.pstate}
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <input
                        type="text"
                        id="plat"
                        onChange={handleChange}
                        required
                        className="form-control"
                        defaultValue={itemC.plat}
                        placeholder="Latitude"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="plong"
                        onChange={handleChange}
                        required
                        className="form-control"
                        defaultValue={itemC.plong}
                        placeholder="Longitude"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <input
                        type="text"
                        id="ppincode"
                        onChange={handleChange}
                        required
                        className="form-control"
                        defaultValue={itemC.hpincode}
                        placeholder="Pincode"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="pphone"
                        onChange={handleChange}
                        required
                        className="form-control"
                        defaultValue={itemC.hphone}
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <button className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
export default PoliceStationRow;
