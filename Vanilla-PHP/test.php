<?php
function generateName() {
        $familyNames = ['Kovács', 'Varga', 'Szabó', 'Horváth'];
        $givenNames = ['István','Dávid','Ádám','Anna','Dorottya','Lujza'];
        return $familyNames[array_rand($familyNames)].' '.$givenNames[array_rand($givenNames)];
}

function generateEmail($name) {
    $emailEndings = ['yahoo.com','gmail.com','freemail.hu'];
    $nameArray = explode(" ",$name);
    if(sizeof($nameArray) == 0) {
        $simpleName = "jdoe";
    }
    elseif(sizeof($nameArray) == 1) {
        $simpleName = $nameArray[0];
    }
    else {
        $simpleName = substr($nameArray[0],0,1).$nameArray[1];
    }
    $simpleName = strtolower($simpleName);
    $email = $simpleName.'@'.$emailEndings[array_rand($emailEndings)];
    return $email;
}

$name = generateName();
$email = generateEmail($name);

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Generate Names</title>
</head>
<body>
<h1>Hello <?php echo $name; ?>!</h1>
<p>
    Your email address is: <?php echo $email; ?>
</p>
</body>
</html>