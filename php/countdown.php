<?php

if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}

function countdown($seconds)
{
    if( (time() + $seconds) > time() )
    {
      echo $seconds-- . PHP_EOL;
      usleep(1000000);
      countdown($seconds);
    }
}

countdown(5);

die('0 All done...'. PHP_EOL);
