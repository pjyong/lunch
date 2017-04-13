import xhr from './xhr/index'

class PeopleService {
    fetch(){
        let url = 'lunch/people'

        return xhr({url})
    }

    toggleEat(params){
        let url = 'lunch/toggleeat'

        return xhr({
            method: 'post',
            url: url,
            body: params
        })
    }

    addPeople(params){
        let url = 'lunch/addpeople'

        return xhr({
            method: 'post',
            url: url,
            body: params
        })
    }
}

export default new PeopleService()
