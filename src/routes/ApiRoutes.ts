import express, { NextFunction, Request, Response } from "express"
import { photoRouter } from "./PhotoRoutes"
import { userRouter } from "./UserRoutes"

const apiRouter = express()

apiRouter.use( "/user", userRouter )
apiRouter.use( "/photo", photoRouter )

apiRouter.get("/", ( req: Request, res: Response, next: NextFunction ) => {
    res.json({message: "API working"})
})

export { apiRouter }