import { propertyCalc } from '../service/calc-service';

const calcMeters = async (req, res) => {

    try {
        const meters = req.body.meters;
        if (meters >= 10 && meters <= 10000) {
            const value = await propertyCalc();
            const vlImovel = meters * JSON.parse(value.value);
          return  res.status(200).json({"Valor do imóvel": vlImovel});
        }
        res.status(406).json('Failed'); 
    } catch (error) {
        console.error(error);
      return  res.status(500).json('Failed to request');
    }
};


export { calcMeters };