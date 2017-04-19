<?php
class AskController extends LunchBaseController
{

    public $layout='//layouts/column4';

    public function filters()
   {
       if($this->isApp) {
           return array(
               'accessControl',
               'testFilter',

           );
       }else {
           return array(
               'accessControl',
               'testFilter',
           );
       }
   }



   public function FilterTestFilter($filterChain){
       if(Helper::authWX('care')){

           $filterChain->run();
       }
   }

   public function actionIndex(){
        $this->setPageTitle('车友保养');
        $this->render('index');
    }

    public function getUID()
    {
         return Yii::app()->user->id;
         // 用于测试
        //   return 61200;
    }

     // 获取所有分类
     public function actionAllCategories()
     {
         $ask = new Ask();
         $this->echoJsonEncode($ask->getAllCategories());
     }

     // 获取最近解决的问题
     public function actionLatestQuestions()
     {
         $ask = new Ask();
         $this->echoJsonEncode($ask->getQuestions());
     }

     //　根据关键词搜索
     public function actionSearch()
     {
         $searchWords = Yii::app()->request->getParam('keywords');
         if(!$searchWords){
             die('并不存在');
         }
         $ask = new Ask();
         // 根据空格做一个切分，如果任何字符串有匹配车型，或分类
         $arr = explode(' ',$searchWords);
         if(count($arr)>=5){
             die('我们并不支持这么切分');
         }
         $allCates = $ask->getAllCategories();
         $where = " 1=1 ";
         foreach($arr as $k => $v){
             foreach($allCates as $cate){
                 if($cate['Title'] == $v){
                     $where .= " AND aq.ID IN(SELECT QuestionID FROM web_ask_category_questions WHERE CategoryID=".$cate['ID'].")";
                     unset($arr[$k]);
                     break;
                 }
             }
         }

         $carClassSql = '';
         if(count($arr)>0){
             foreach($arr as $k => $v){
                 //查找车系
                 $result = $ask->getCarClassIDStrByTitle($v);

                 if($result){
                     $carClassSql .= ','.$result;
                     unset($arr[$k]);
                 }

             }
         }

         $carClassSql = trim($carClassSql,',');
        //  Tools::debug($carClassIDs);
         if($carClassSql){
             $where .= " AND aq.CarClassID IN (".$carClassSql.")";
         }

         // 关键词搜索
         $keyworkSql = '';
         if(count($arr)>0){
             foreach($arr as $v){
                 $keyworkSql .= "OR (aq.Title LIKE '%".$v."%') ";
             }
         }
         if($keyworkSql){
             $where .= " AND (".trim($keyworkSql, 'OR').")";
         }

         $this->echoJsonEncode( $ask->getQuestions($where, 1, 10000, '') );
     }

     //
     public function actionAddQuestion()
     {
         $data = array();
         $data['Title'] = Yii::app()->request->getParam('title');
         $data['Content'] = Yii::app()->request->getParam('description');
         $data['CreateTime'] = Helper::zeqiiTime('l');
         $data['Status'] = 1;
         $data['CarClassID'] = 0;
         $data['UID'] = $this->getUID();

         $ask = new Ask();
         $qid = $ask->addQuestion($data);
         $jsonData = array(
             'status' => true,
             'id' => $qid,
         );
         $this->echoJsonEncode($jsonData);
     }

     // 获取所有品牌
     public function actionGetBrands(){
         $care = new Carebrand();
         $this->echoJsonEncode($care->getAllCarBrand());
     }

     // 获取该品牌所有车系
     public function actionGetCarClasses(){
         $brandID = Yii::app()->request->getParam('brandid');
         $care = new Carebrand();
         $this->echoJsonEncode($care->getAllCarClassesByBrandID($brandID));
     }

     public function actionGetQuestion(){
         $QID = Yii::app()->request->getParam('id');
         $ask = new Ask();
         $data = $ask->getQuestion($QID);
         $jsonData = array(
             'status' => false,
             'data' => $data
         );
         if($data){
             $jsonData['status'] = true;
         }

         $this->echoJsonEncode($jsonData);
     }

     public function actionGetAnswerList(){
         $QID = Yii::app()->request->getParam('qid');
         $ask = new Ask();
         $data = $ask->getAnswerList($QID);
         $this->echoJsonEncode($data);
     }

}
