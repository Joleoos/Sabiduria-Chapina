<?php
session_start();
session_unset();
session_destroy();
header("Location: log_new_user.php");
exit();
?>