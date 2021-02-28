<?php snippet('header') ?>

<div id="cursor">
  <img src="assets/images/(.svg" alt="Left Parentheses Desktop Cursor" class="cursor-parentheses cursor-parentheses-left">
  <div class="cursor-copy-container">
    <p class="cursor-top">Couch Prints</p>
    <div class = "cursor-bottom-row">
      <img class = "left-arrow" alt="Left Arrow Desktop Cursor" src="assets/icons/Cam_Arrow_Black_left.png">
      <p class="cursor-bottom">Notion Magazine</p>
      <img class = "right-arrow" alt="Right Arrow Desktop Cursor" src="assets/icons/Cam_Arrow_Black_Right.png">
    </div>  
  </div>
  <img src="assets/images/).svg" alt="Right Parentheses Desktop Cursor" class="cursor-parentheses cursor-parentheses-right">
</div>
<section class="bg-img-section">
  <?php if ($backgroundPage = page('background')) : ?>
    <?php 
      $ind = 0;
      foreach ($backgroundPage->images()->sortBy('sort', 'filename') as $bgimage) : ?>
      <div class="bg-img-div">
        <img 
          alt="<?= $bgimage->alt() ?>"
          class="bg-img lazyload" 
          data-srcset="<?= $bgimage->srcset('image') ?>"
          data-src="<?= $bgimage->resize(2000, 2000)->url() ?>"
        >
      </div>
    <?php 
      $ind++;
    endforeach ?>
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
        <button class="close-tag info-content">Close</button>
        
      <?php endif ?>
    </div>
  </div>
</section>

<img class="hero-tag tidball-tag-desktop" alt="Desktop Logo Saying 'Cameron Tidball Sciullo'" src="assets/logos/Cameron+Tidball_desktop.svg">
<img class="hero-tag tidball-tag-mobile" alt="Mobile Logo Saying 'Cameron Tidball Sciullo'" src="assets/logos/Cameron+Tidball_mobile.svg">
<button>
  <img class="info-tag" alt="Info Button" src="assets/logos/Info_CJ-TS.svg"> 
</button>

<section class="projects-section --hide-right">
  <div class="projects-container">
    <?php if ($projects = page('projects')) : ?>
      <?php if ($albums = $projects->children()->listed()->filterBy('template', 'album')) ?>
      <?php foreach ($projects->children()->listed() as $project) : ?>

        <?php if ($project->template() == 'album') : ?>
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
                width="<?= $picture->resize(400, 400)->width() ?>" 
                height="<?= $picture->resize(400, 400)->height() ?>" 
                src="<?= $firstPicture->resize(400, 400)->url() ?>"
              >
            <?php endif ?>
          </div>
        <?php else : ?>
          <div class="project video" data-project="<?= $project->projectName() ?>" data-info="<?= $project->projectInfo() ?>" style="cursor:url(assets/icons/triangle.svg), auto;">
            <div class="o-ratio-16-9">
              <div class="vimeo-player" data-vimeo="<?= $project->vimeoId() ?>">
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