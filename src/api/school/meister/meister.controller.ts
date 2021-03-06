import express from "express";
const router = express.Router();
import * as service from '@src/api/school/meister/meister.service';

router.post('/point/:grade/:classNo/:studentNo', async (req:express.Request, res:express.Response, next:express.NextFunction) => {
    try {
        res.send(JSON.stringify(
            await service.getPoint(
                Number(req.params.grade),
                Number(req.params.classNo),
                Number(req.params.studentNo),
                req.body.pw,
                req.body.defaultPW
            )
        ));
    } catch(err) {
        next(err);
    }
})

router.get('/score/:grade/:classNo/:studentNo', async (req:express.Request, res:express.Response, next:express.NextFunction) => {
    try {
        res.send(JSON.stringify(
            await service.getScore(
                Number(req.params.grade),
                Number(req.params.classNo),
                Number(req.params.studentNo)
            )
        ));
    } catch(err) {
        next(err);
    }
})

export = router;