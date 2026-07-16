import { Router } from "express"

import { readArticle, updateArticle, deleteArticle, createArticle,
likeArticle, dislikeArticle, unlikeArticle, undislikeArticle,
commentArticle, editCommentArticle, deleteCommentArticle } from "../controllers/articleController"

import { uploadArticlePic } from "../controllers/uploadController"

const router = Router()

router.get("/", readArticle)
router.put("/:id", updateArticle)
router.delete("/:id", deleteArticle)
router.post("/", createArticle))
router.post("/", uploadArticlePic)
router.patch("/:id", likeArticle)
router.patch("/:id", dislikeArticle)
router.patch("/:id", unlikeArticle)
router.patch("/:id", undislikeArticle)

router.patch("/:id", commentArticle)
router.patch("/:id", editCommentArticle)
router.patch("/:id", deleteCommentArticle)

export default router