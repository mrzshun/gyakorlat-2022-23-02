<?php
    require_once 'vendor/autoload.php';
    $posts = json_decode(file_get_contents('./data/blogdata.json',true),true);
    $postById = null;
    if(isset($_GET['id'])) {
        foreach($posts as $post) {
            if($post['id'] == $_GET['id']){
                $postById = $post;
            }
        }
    }
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
    <?php if($postById == null) : ?>
        <h1>All blogposts</h1>
        <?php foreach($posts as $post) : ?>
            <h2><?php echo $post['title']; ?></h2>
            <p>Author: <?php echo $post['author']; ?></p>
            <p><?php echo $post['description']; ?></p>
            <p><a href="blog.php?id=<?php echo $post['id']; ?>" > >more...</a></p>
        <?php endforeach; ?>
    <?php else : ?>
        <h1>The post you are looking for:</h1>
        <h2><?php echo $postById['title']; ?></h2>
            <p>Author: <?php echo $postById['author']; ?>; ID: <?php echo $postById['id']; ?></p>
            <p><?php echo $postById['description']; ?></p>
            <p><?php echo $postById['text']; ?></p>
    <?php endif; ?>
  </body>
</html>