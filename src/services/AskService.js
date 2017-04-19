import xhr from './xhr/index'

class AskService {
    fetchLatestSolvedQuestions(){
        let url = 'ask/latestquestions'

        return xhr({url})
    }

    fetchAllCategories(){
        let url = 'ask/allcategories'

        return xhr({url})
    }

    addQuestion(params){
        let url = 'ask/addquestion'
        return xhr({
            method: 'post',
            url: url,
            body: params
        })
    }

    fetchQuestion(params){
        let url = 'ask/getquestion'
        return xhr({
            method: 'get',
            url: url,
            body: params
        })
    }

    fetchAnswerList(params){
        let url = 'ask/getanswerlist'
        return xhr({
            method: 'get',
            url: url,
            body: params
        })
    }

    searchQuestions(params){
        let url = 'ask/search'
        return xhr({
            method: 'get',
            url: url,
            body: params
        })
    }

    fetchAllBrands(){
        let url = 'ask/getbrands'
        return xhr({url})
    }

    fetchAllCarClasses(params){
        let url = 'ask/getcarclasses'

        return xhr({
            method: 'get',
            url: url,
            body: params
        })
    }

}

export default new AskService()
