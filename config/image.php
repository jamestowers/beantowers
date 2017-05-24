<?php

return array(

    /*
    |--------------------------------------------------------------------------
    | Image Driver
    |--------------------------------------------------------------------------
    |
    | Intervention Image supports "GD Library" and "Imagick" to process images
    | internally. You may choose one of them according to your PHP
    | configuration. By default PHP's "GD Library" implementation is used.
    |
    | Supported: "gd", "imagick"
    |
    */

    'driver' => 'gd',

    'sizes' => [
        'thumbnail' => array(
            'width' => 600,
            'height' => 600,
            'crop' => true
        ),
        'small' => array(
            'width' => 740,
            'height' => 1200,
            'fit' => false
        ),
        'medium' => array(
            'width' => 1024,
            'height' => 768,
            'fit' => false
        ),
        'large' => array(
            'width' => 1440,
            'height' => 900,
            'fit' => false
        ),
        'xlarge' => array(
            'width' => 1920,
            'height' => 1080,
            'fit' => false
        ),
        'header-small' => array(
            'width' => 600,
            'height' => 300,
            'fit' => false
        ),
        'header-medium' => array(
            'width' => 900,
            'height' => 600,
            'fit' => false
        ),
        'header-large' => array(
            'width' => 1400,
            'height' => 1000,
            'fit' => false
        ),
        'header-xlarge' => array(
            'width' => 1600,
            'height' => 1200,
            'fit' => false
        )
    ]

);
