<?php snippet('header') ?>

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
    <?php 
      $ind = 0;
      foreach ($backgroundPage->images()->sortBy('sort', 'filename') as $bgimage) : ?>
      <div class="bg-img-div">
        <img 
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

<section class="projects-section --hide-right">
  <div class="projects-container">
    <?php if ($projects = page('projects')) : ?>
      <?php if ($albums = $projects->children()->listed()->filterBy('template', 'album')) ?>
      <?php foreach ($projects->children()->listed() as $project) : ?>

        <?php if ($project->template() == 'album') : ?>
          <div class="album project" data-project="<?= $project->projectName() ?>" data-info="<?= $project->projectInfo() ?>">
            <?php if ($project->images()->count() > 1) : ?>

              <div class = "mobile-cursor" data-project="<?= $project->projectName() ?> " data-info="<?= $project->projectInfo() ?>">
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
              $widthInVHBig = ($picture->width() / $picture->height()) * 85;
              $widthInVHSmall = ($picture->width() / $picture->height()) * 65;
            ?>

                <img 
                  class="visible-image lazyload"
                  sizes="(min-width: 600px) <?= $widthInVHBig ?>vh, <?= $widthInVHSmall ?>vh"
                  width="<?= $picture->resize(1000, 1000)->width() ?>" 
                  height="<?= $picture->resize(1000, 1000)->height() ?>"
                  data-src="<?= $picture->resize(1000, 1000)->url() ?>"
                  data-srcset="<?= $picture->srcset('image') ?>"
                >
            <?php 
              $ind++;
              endforeach 
            ?>
            <?php if ($firstPicture = $project->image()) : ?>
              <img 
                class="blurred-image" 
                width="<?= $picture->resize(400, 400)->width() ?>" 
                height="<?= $picture->resize(400, 400)->height() ?>" 
                src="<?= $firstPicture->resize(400, 400)->url() ?>"
              >
            <?php endif ?>
          </div>
        <?php else : ?>
          <div class="project video" data-project="<?= $project->projectName() ?>" data-info="<?= $project->projectInfo() ?>">

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