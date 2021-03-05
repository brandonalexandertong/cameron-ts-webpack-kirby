<?php

@include __DIR__ . DS . 'credentials.php';

return [
  'debug' => false,

  'thumbs' => [
    'srcsets' => [
      'image' => [
        '300w' => [
          'width' => 300,
          'height' => 300
        ],
        '500w' => [
          'width' => 500,
          'height' => 600
        ],
        '700w' => [
          'width' => 700,
          'height' => 1000
        ],
        '800w' => [
          'width' => 800,
          'height' => 1000
        ],
        '1000w' => [
          'width' => 1000,
          'height' => 1000
        ],
        '1400w' => [
          'width' => 1400,
          'height' => 2000
        ],
        '1600w' => [
          'width' => 1600,
          'height' => 2000
        ],
        '2000w' => [
          'width' => 2000,
          'height' => 2000
        ]
      ],
    ],
  ],
];
