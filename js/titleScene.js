/* global Phaser */

// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4b9",
      align: "center",
    }
  }

  /**
   * Can be defined on your own Scenes.
   * this method is called by the Scene Manager when the scene starts,
   * before preload() and create().
   * @param {object} data - Any data via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "assets/2qPZoW54 (1).png")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "BakuRun", this.titleSceneTextStyle)
      .setOrigin(0.5)
    //pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - the current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    if (time > 6000) this.scene.switch("menuScene")
    // pass
  }
}

export default TitleScene
