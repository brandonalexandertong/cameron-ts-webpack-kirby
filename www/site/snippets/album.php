
<div class="album project" data-project="<?= $project->projectName() ?>" data-info="<?= $project->projectInfo() ?>">
<div class="visible-images">
  <div class = "mobile-cursor">
    <img src="assets/images/(-white.svg" alt="Left Parentheses" class="mobile-cursor-parentheses cursor-parentheses-left">
    <div class="cursor-copy-container">
      <p class="cursor-top"><?= $project->projectName() ?></p>
      <div class = "cursor-bottom-row">
        <img class = "left-arrow" alt="Left Arrow Icon" src="assets/icons/Cam_Arrow_White_left.png">
        <p class="cursor-bottom"><?= $project->projectInfo() ?></p>
        <img class = "right-arrow" alt="Right Arrow Icon" src="assets/icons/Cam_Arrow_White_Right.png">
      </div>
    </div>
    <img src="assets/images/)-white.svg" alt="Right Parentheses" class="mobile-cursor-parentheses cursor-parentheses-right">
  </div>

  <button class="prev">
  </button>
  <button class="next">
  </button>
<?php 
  foreach ($project->images() as $picture) : 
  $widthInVHBig = ($picture->width() / $picture->height()) * 88;
  $widthInVHSmall = ($picture->width() / $picture->height()) * 65;
?>
    <img 
      alt ="<?= $picture->alt() ?>"
      class="visible-image lazyload"
      sizes="(min-width: 600px) <?= $widthInVHBig ?>vh, <?= $widthInVHSmall ?>vh"
      width="<?= $picture->resize(1000, 1000)->width() ?>" 
      height="<?= $picture->resize(1000, 1000)->height() ?>"
      data-src="<?= $picture->resize(1000, 1000)->url() ?>"
      data-srcset="<?= $picture->srcset('image') ?>"
    >
<?php 
  endforeach 
?>
</div>
<?php if ($firstPicture = $project->image()) : ?>
  <img 
    alt ="Blurry background image for design"
    class="blurred-image" 
    width="<?= $picture->resize(100, 100)->width() ?>" 
    height="<?= $picture->resize(100, 100)->height() ?>" 
    src="<?= $firstPicture->resize(100, 100)->url() ?>"
  >
<?php endif ?>
</div>