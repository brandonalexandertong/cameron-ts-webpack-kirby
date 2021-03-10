
<div class="album project" data-project="<?= $project->projectName() ?>" data-info="<?= $project->projectInfo() ?>">
  <div class="visible">
    <div class = "mobile-cursor">
      <img src="assets/images/(.svg" alt="Left Parentheses" class="mobile-cursor-parentheses cursor-parentheses-left">
      <div class="cursor-copy-container">
        <p class="cursor-top"><?= $project->projectName() ?></p>
        <div class = "cursor-bottom-row">
          <img class = "left-arrow lazyload" alt="Left Arrow Icon" src="assets/icons/arrow-left.svg">
          <p class="cursor-bottom"><?= $project->projectInfo() ?></p>
          <img class = "right-arrow lazyload" alt="Right Arrow Icon" src="assets/icons/arrow-right.svg">
        </div>
      </div>
      <img src="assets/images/).svg" alt="Right Parentheses" class="mobile-cursor-parentheses cursor-parentheses-right">
    </div>

    <button class="prev" aria-label="Press to view previous image"></button>
    <button class="next" aria-label="Press to view next image"></button>

  <?php 
    foreach ($project->images()->sortBy('sort', 'filename') as $picture) : 
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
  <div class="project-halo" style="box-shadow: 0 0 70px <?= $project->shadowColor() ?>;"></div>
</div>