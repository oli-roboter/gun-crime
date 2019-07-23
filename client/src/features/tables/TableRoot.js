import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import CustomTableHead from "./TableHead";

const mapStateToProps = state => {
  return {};
};

class TableRoot extends Component {
  componentDidMount() {}

  render() {
    const {} = this.props;
    return (
      <div style={{ margin: 15 }}>
        <h3>Worker's Table</h3>

        <Paper>
          <Table>
            {/* <CustomTableHead /> */}
            <TableBody>
              <Fragment>
                <TableRow key={1}>
                  <TableCell component="th" scope="row" style={{ width: 100 }}>
                    Coco
                  </TableCell>
                </TableRow>
              </Fragment>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TableRoot);