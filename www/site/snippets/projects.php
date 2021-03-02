
<section class="projects-section --hide-right">
  <div class="projects-container">
    <?php if ($projects = page('projects')) : ?>
      <?php foreach ($projects->children()->listed() as $project) : ?>
        <?php if ($project->blueprint()->title() == 'Album') : ?>
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