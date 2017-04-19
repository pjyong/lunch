<?php
class Ask extends BaseModel
{
    public function getAllCategories()
    {
        $sql = "SELECT ac.ParentID,ac.Title,ac.ID
            FROM web_ask_category as ac
            WHERE Status=1
            ORDER BY Sort DESC";
        $allData = $this->executer($sql, DB_SLAVE, 'queryAll');
        if($allData){
            foreach($allData as $k => $v){
                $allData[$k]['ParentID'] = (int)$v['ParentID'];
                $allData[$k]['ID'] = (int)$v['ID'];
            }
        }

        return $allData ? $allData : array();
    }

    public function getQuestion($id){
        $sql = "SELECT aq.ID, aq.UID,aq.Title,aq.Content,aq.CreateTime,
            aa.UserType as AnswerUserType,aa.UID as AnswerUID,
            aa.Content as AnswerContent
            FROM web_ask_questions as aq
            left join web_ask_answers as aa on aa.QID=aq.ID

            WHERE aq.ID= $id AND aq.Status=1";
        $allData = $this->executer($sql, DB_SLAVE, 'queryRow');
        if($allData){
            $allData['ID'] = (int)$allData['ID'];
            $allData['UID'] = (int)$allData['UID'];
            $allData['AnswerUID'] = (int)$allData['AnswerUID'];
        }
        return $allData ? $allData : array();
    }

    public function getQuestions($where = '', $page = 1, $pageSize = 10, $keyword = '')
    {
        $condition = " aq.Status=1 AND aq.SolvedAID != 0 ";
		$condition .= !empty($where) ? ' AND ' . $where : '';
        $offset = ($page-1) * $pageSize;
        $limiter = !empty($pageSize) ? " LIMIT ".$offset.",".$pageSize."" : '';
        $keywords = !empty($keyword) ? " AND aq.Title LIKE '%" . $keyword . "%'" : '';
        $condition .= $keywords;
        $sql = "SELECT aq.ID, aq.UID,aq.Title,aq.Content,aq.CreateTime,
            aa.UserType as AnswerUserType,aa.UID as AnswerUID,
            aa.Content as AnswerContent
            FROM web_ask_questions as aq
            left join web_ask_answers as aa on aa.QID=aq.ID

            WHERE ".$condition."
            ORDER BY aq.CreateTime DESC ".$limiter;


        // test
        /*
        $sql = "SELECT aq.ID, aq.UID,aq.Title,aq.Content,aq.CreateTime,
            aa.UserType as AnswerUserType,aa.UID as AnswerUID,
            aa.Content as AnswerContent
            FROM web_ask_questions as aq
            left join web_ask_answers as aa on aa.QID=aq.ID

            WHERE ".$condition."
            ORDER BY aq.ID ASC ".$limiter;
            */
        $allData = $this->executer($sql, DB_SLAVE, 'queryAll');
        return $allData ? $allData : array();
    }



    // 提问
    public function addQuestion($data)
    {
        $Qid = $this->AutoExecute(DB_MASTER, 'web_ask_questions', $data, "INSERT", '', true);

        return $Qid;
    }

    public function getCarClassIDStrByTitle($title){
        $sql = "SELECT ID FROM ".T_CAR_CLASSES." WHERE Title='".$title."'";
        $all = $this->executer($sql, DB_SLAVE, 'queryAll');
        return Tools::joinKeyForArr('ID', $all);
    }

    public function getAnswerList($qid){
        $sql = "SELECT * FROM web_ask_answers WHERE QID=$qid AND Status =1";
        $all = $this->executer($sql, DB_SLAVE, 'queryAll');

        return $this->convertIntForArr(array('ID','UserType', 'UID', 'QID', 'IsBest'), $all);
    }

    // 对一个数组的某些值做整形处理, 针对二维数组
    public function convertIntForArr($keyArr, $dataArr){
        if(!$dataArr){return array();}
        if(!$keyArr){return $dataArr;}
        foreach($dataArr as $k => $v){
            foreach($keyArr as $convertKey){
                if(isset($v[$convertKey])){
                    $dataArr[$k][$convertKey] = (int)$v[$convertKey];
                }
            }
        }
        return $dataArr;
    }
}
