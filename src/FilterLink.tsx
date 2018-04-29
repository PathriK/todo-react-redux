import { connect, Dispatch } from "react-redux";
import { applyFilter } from "./actionCreators";
import Link from "./Link";
import { IApplyFilter, IState, VisibilityFilter } from "./types";

interface IStateToProps {
    active: boolean
}

interface IDispatchToProps {
    onClick: () => void
}

interface IOwnProps {
    filter: VisibilityFilter,
    children: React.ReactNode
}

const mapStateToProps = (state: IState, ownProps: IOwnProps): IStateToProps => (
    {
        active: ownProps.filter === state.visibilityFilter
    }
);

const mapDispatchToProps = (dispatch: Dispatch<IApplyFilter>, ownProps: IOwnProps): IDispatchToProps => (
    {
        onClick: () => dispatch(applyFilter(ownProps.filter))
    }
);

const FilterLink = connect<IStateToProps, IDispatchToProps, IOwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;