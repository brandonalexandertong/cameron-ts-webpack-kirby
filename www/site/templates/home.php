<?php
/*
  Templates render the content of your pages.

  They contain the markup together with some control structures
  like loops or if-statements. The `$page` variable always
  refers to the currently active page.

  To fetch the content from each field we call the field name as a
  method on the `$page` object, e.g. `$page->title()`.

  This home template renders content from others pages, the children of
  the `photography` page to display a nice gallery grid.

  Snippets like the header and footer contain markup used in
  multiple templates. They also help to keep templates clean.

  More about templates: https://getkirby.com/docs/guide/templates/basics
*/
?>
<?php snippet('header') ?>
<?php
/*
    We always use an if-statement to check if a page exists to
    prevent errors in case the page was deleted or renamed before
    we call a method like `children()` in this case
  */
?>
<div class="cursor">
  <img src="assets/images/(.svg" class="cursor-parentheses cursor-parentheses-left">
  <div class="cursor-copy-container">
    <p class="cursor-top"></p>
    <div class = "cursor-bottom-row">
      <img class = "left-arrow" src="assets/icons/Cam_Arrow_Black_left.png">
      <p class="cursor-bottom"></p>
      <img class = "right-arrow" src="assets/icons/Cam_Arrow_Black_Right.png">
    </div>  
  </div>
  <img src="assets/images/).svg" class="cursor-parentheses cursor-parentheses-right">
</div>
<section class="bg-img-section">
  <?php if ($backgroundPage = page('background')) : ?>
    <?php foreach ($backgroundPage->images()->sortBy('sort', 'filename') as $bgimage) : ?>
      <div class="bg-img-div">
        <noscript class="loading-lazy">
          <img class="bg-img lazyload" loading="lazy" srcset="<?= $bgimage->resize(2000, 2000)->url() ?>">
        </noscript>
      </div>
    <?php endforeach ?>
  <?php endif ?>
</section>
<section class="info-hero-section slide-up">
  <div class="info-container clear">
    <div class="info-section">
      <h3 class="about-h3 info-content">About</h3>
      <?php if ($infoPage = page('info')) : ?>
        <p class="about-copy info-content"><?= $infoPage->about()->html() ?></p>
        <h3 class="selected-works-tag info-content">Selected Works</h3>
        <div class="selected-works-container info-content">
          <ul class="selected-works">

            <?php
            $columnOne = $infoPage->worksCol1()->toStructure();
            foreach ($columnOne as $columnItem) : ?>
              <li><?= $columnItem->project()->html() ?></li>
            <?php endforeach ?>

          </ul>
        </div>

        <h3 class="contact-tag info-content">Contact</h3>
        <ul class="contact-list info-content">
          <li>
            <?= html::email($infoPage->email()) ?>
          </li>
          <li>
            <?= html::tel($infoPage->phone()) ?>
          </li>
          <?php
          $socialLinks = $infoPage->social()->toStructure();
          foreach ($socialLinks as $link) : ?>
            <li>
              <a href="<?= $link->url() ?>"><?= $link->platform()->html() ?></a>
            </li>
          <?php endforeach ?>
        </ul>
        <p class="close-tag info-content">
          Close
        </p>
      <?php endif ?>
    </div>
  </div>
</section>

<img class="hero-tag tidball-tag-desktop" src="assets/logos/Cameron+Tidball_desktop.svg">
<img class="hero-tag tidball-tag-mobile" src="assets/logos/Cameron+Tidball_mobile.svg">
<img class="info-tag" src="assets/logos/Info_CJ-TS.svg"> 

<section class="projects-section">
  <div class="projects-container">
    <?php if ($projects = page('projects')) : ?>
      <?php if ($albums = $projects->children()->listed()->filterBy('template', 'album')) ?>
      <?php foreach ($projects->children()->listed() as $project) : ?>

        <?php if ($project->template() == 'album') : ?>
          <div class="album project">
            <?php if ($project->images()->count() > 1) : ?>

              <div class = "mobile-cursor" data-project="<?= $project->projectName() ?>" data-info="<?= $project->projectInfo() ?>">
                <img src="assets/images/(-white.svg" class="mobile-cursor-parentheses cursor-parentheses-left">
                <div class="cursor-copy-container">
                  <p class="cursor-top"></p>
                  <p class="cursor-bottom"></p>
                </div>
                <img src="assets/images/)-white.svg" class="mobile-cursor-parentheses cursor-parentheses-right">
              </div>

              <div class="prev" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `<?= $project->projectInfo() ?>`); removeRight()" onmouseleave="removeCursor()">
              </div>
              <div class="next" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `<?= $project->projectInfo() ?>`); removeLeft()" onmouseleave="removeCursor()">
              </div>
            <?php else : ?>

              <div class = "mobile-cursor" data-project="<?= $project->projectName() ?>" data-info="<?= $project->projectInfo() ?>">
                <img src="assets/images/(-white.svg" class="mobile-cursor-parentheses cursor-parentheses-left">
                <div class="cursor-copy-container">
                  <p class="cursor-top"></p>
                  <p class="cursor-bottom"></p>
                </div>
                <img src="assets/images/)-white.svg" class="mobile-cursor-parentheses cursor-parentheses-right">
              </div>
              
              <div class="prev">
              </div>

              <div class="next">
              </div>
            <?php endif ?>

            <?php 
              $ind = 0;
              foreach ($project->images() as $picture) : 
            ?>
              <noscript class="loading-lazy">
                <img 
                  class="visible-image lazyload"
                  width="<?= $picture->resize(1000, 1000)->width() ?>" 
                  height="<?= $picture->resize(1000, 1000)->height() ?>"
                  loading="lazy"
                  src="<?= $picture->resize(1000, 1000)->url() ?>"
                <?php if ($ind == 0) : ?>
                  style="display:block;"
                <?php endif ?>
                >
              </noscript>
            <?php 
              $ind++;
              endforeach 
            ?>
            <?php if ($firstPicture = $project->image()) : ?>
              <img class="blurred-image" width="<?= $picture->resize(400, 400)->width() ?>" height="<?= $picture->resize(400, 400)->height() ?>" src="<?= $firstPicture->resize(400, 400)->url() ?>">
            <?php endif ?>
          </div>
        <?php else : ?>
          <div class="project video">

            <div class="o-ratio-16-9">

              <div class="vimeo-player" data-vimeo="<?= $project->vimeoId() ?>" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `<?= $project->projectInfo() ?>`)" onmouseleave="removeCursor()">
                <?php snippet('loader') ?>
                  <div class="vimeo-player__ui">
                    <button class="vimeo-player__play">PLAY</button>
                    <button class="vimeo-player__pause">PAUSE</button>
                    <div class="vimeo-player__seek">0:00</div>
                    <button class="vimeo-player__mute icon">
                      <img class = "mute-off" src="assets/icons/volume_up.svg" alt="Mute">
                      <img class = "mute-on" src="assets/icons/volume_off.svg" alt="Mute">
                    </button>
                    <button class="vimeo-player__maximize icon">
                      <img src="assets/icons/fullscreen.png" alt="Maximize">
                    </button>
                </div>
                <div class="vimeo-player__progress"></div>
              </div>
            </div>
          </div>
        <?php endif ?>
      <?php endforeach ?>
    <?php endif ?>
  </div>

</section>

<?php snippet('footer') ?>