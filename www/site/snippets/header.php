<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="user-scalable=no, width=device-width,initial-scale=1.0">
  <title><?= $site->title()->html() ?> </title>
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?= $site->title()->html() ?>">
  <meta property="og:site_name" content="<?= $site->title()->html() ?>">
  <link rel="icon" type="image/png" href="./assets/icons/91.png" sizes="32x32">
  <link rel="apple-touch-icon" sizes="76x76" href="./assets/icons/91.png">
  <style>
  @font-face {
  font-family: 'Maison Neue';
  src: url('assets/fonts/MaisonNeueWEB-Bold.woff2') format('woff2'),
       url('assets/fonts/MaisonNeueWEB-Bold.woff') format('woff');
  font-weight: 700;
}
@font-face {
  font-family: 'Maison Neue';
  src: url('assets/fonts/MaisonNeueWEB-Book.woff2') format('woff2'),
       url('assets/fonts/MaisonNeueWEB-Book.woff') format('woff');
  font-weight: normal;
}
</style>
  <?= liveCSS('assets/builds/bundle.css') ?>
</head>
<body>