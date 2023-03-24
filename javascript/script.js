//greatest number
function check(){
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var c=parseInt(document.getElementById("c").value);
    var r=document.getElementById("result");
    var result=(a>b&&a>c?a:b>a&&b>c?b:c);
    r.value=result;
    
}

//finding unique words
function unique_words(input_id,choice){
    if(choice=='0') 
        var data = document.getElementById('txt').value;
    else
        var data = choice;
   var result = document.getElementById(input_id);
   var temp = data;
   var words = new Array();
   words = temp.split(" ");
   var uniqueWords = new Array();
   var count = new Array();
   var k=-1,freq_word,longest_word;
   var max_freq=0,longest_count=0,j;

   for (var i = 0; i < words.length; i++) {
     var f = 0;
     for (j = 0; j < uniqueWords.length; j++) {
       if (words[i] == uniqueWords[j]) {
         count[j] = count[j] + 1;
         //finding the max frequency of unique word
         if(count[j]>max_freq){
            freq_word=uniqueWords[j];
            max_freq=count[j];
         }

          f = 1;
          break;
        }
      }
      if (f == 0) {
         k++;
        count[k] = 1;
        uniqueWords[k] = words[i];

        //finding the longest word
        if(uniqueWords[j].length>longest_count){
            longest_count=uniqueWords[j].length;
            longest_word=uniqueWords[j];
         }
      }
                             
    }

    result.append("Word having highest frequency : " + freq_word + " (" + max_freq+")" + "\n");
    result.append("Longest unique word : " + longest_word + " (" + longest_count+")" + "\n\n");

    if(choice=='0'){
        for(var i=0;i<uniqueWords.length;i++){
            result.append("count of " + uniqueWords[i] + " : " + count[i]+"\n");
        }
    }

   
  }


  //replacing the words
function replace_word(){
    var data = document.getElementById('txt').value;
    var word_rep=document.getElementById('replace').value;
    var result=document.getElementById('result2');
    data=data.replace(/ a /gi," "+word_rep+" ");
    result.append("New String after replaceing: \n" + data +"\n\n");
    unique_words('result2',data);
}


//finding the words containing given character
function process(){
    var str = document.getElementById("input_txt").value;
    var result=document.getElementById('result3');
    var result1=document.getElementById('result4');
    var result2=document.getElementById('result5');
    var words = str.split(" ");
    var pattern1 = /[aprs]/g;
    var pattern2 = /\b[apros]/gi;

    result.append("Words containing 'a','p','r' or 's': \n-->");
    for (var i in words){
        if(words[i].match(pattern1)){
            result.append(" | "+words[i]);
        }
    }

    result1.append("Words beginning with 'a','p','r','o' or 's' \n-->");
    for (var i in words){
        if(words[i].match(pattern2)){
            result1.append(" | "+words[i]);
        }
    }

    result2.append("Words containing 'a','p','r' or 's' replace with 123CSDEPARTMENT: \n");
    for (var i in words){
        if(words[i].match(pattern1)){
            words[i]="123CSDEPARTMENT";
        }

        result2.append(words[i]+" ");

    }

}


//Finding the age by dob
 function dob(){
    data="_________-A-sh9-8.h-h-5@gmail.com";

       var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(data.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
    
 }
