<?php
    require_once 'vendor/autoload.php';

    $faker = Faker\Factory::create();
    $name = $faker->name();
    $email = $faker->email();

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