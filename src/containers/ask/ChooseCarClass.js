import { connect } from 'react-redux'
import ChooseCarClass from '../../components/ask/ChooseCarClass'
import {changeSearch,fetchAllBrands,fetchAllCarClasses} from '../../actions/ask'

const mapStateToProps = (state) => {
    return {
        carClassList: state.carClassList,
        brandList: state.brandList
    }
}

const mapDispatchToProps = {
    changeSearch,
    fetchAllCarClasses,
    fetchAllBrands
}

const CChooseCarClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCarClass)

export default CChooseCarClass
