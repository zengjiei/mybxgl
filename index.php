<?php
$dir="teacher";
$filename='list';
//include('./views/main/index.html')
//判断路径是否存在
 if(array_key_exists('PATH_INFO',$_SERVER)){
 //获取url中的路径
 $path = $_SERVER['PATH_INFO'];
 // /main/index
 //去掉第一个斜杠 main/index
 $str=substr($path,1);
 //按照斜杠分割目录名称和文件名称
 $arr=explode('/',$str);
 if(count($arr)==2){
 //覆盖默认的目录名称
 $dir=$arr[0];
 $filename=$arr[1];
 }else{
    $filename='login';
   }
 }
 include('./views/'.$dir.'/'.$filename.'.html');
?>