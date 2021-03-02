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