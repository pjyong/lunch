import xhr from './xhr/index'

class DepartmentService {
    fetch(){
        let url = '/departments'

        return xhr({url})
    }
}

export default new DepartmentService()
