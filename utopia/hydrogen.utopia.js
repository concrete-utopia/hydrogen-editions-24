import * as Utopia from 'utopia-api';
import {Image, Money} from '@shopify/hydrogen';
import {BooleanSegmentControl} from './layout.utopia';

const ImageCropControl = Utopia.popupListControl([
  {value: 'center', label: 'center'},
  {value: 'top', label: 'top'},
  {value: 'bottom', label: 'bottom'},
  {value: 'left', label: 'left'},
  {value: 'right', label: 'right'},
]);

const ImageTypeControl = Utopia.objectControl({
  altText: Utopia.stringControl(),
  id: Utopia.stringControl(),
  url: Utopia.stringControl(),
  height: Utopia.numberControl(),
  width: Utopia.numberControl(),
});

const CurrencyCodeControl = Utopia.popupListControl([
  {
    value: 'AED',
    label: 'United Arab Emirates Dirham (AED)',
  },
  {
    value: 'AFN',
    label: 'Afghan Afghani (AFN).',
  },
  {
    value: 'EUR',
    label: 'Euro (EUR).',
  },
]);

const UnitPriceMeasurementMeasuredUnit = Utopia.popupListControl([
  {
    label: 'CL',
    value: 'Centiliter',
  },
  {
    value: 'CM',
    label: 'Centimeter',
  },
  {
    value: 'G',
    label: 'Gram',
  },
  {
    value: 'KG',
    label: 'Kilogram',
  },
  {
    value: 'L',
    label: 'Liter',
  },
  {
    value: 'M',
    label: 'Meter',
  },
  {
    value: 'M2',
    label: 'Square meter',
  },
  {
    value: 'M3',
    label: 'Cubic meter',
  },
  {
    value: 'MG',
    label: 'Milligram',
  },
  {
    value: 'ML',
    label: 'Milliliter',
  },
  {
    value: 'MM',
    label: 'Millimeter',
  },
]);

const MoneyV2Control = Utopia.objectControl({
  amount: Utopia.stringControl(),
  currencyCode: CurrencyCodeControl,
});

const UnitPriceMeasurementControl = Utopia.objectControl({
  measuredType: Utopia.popupListControl([
    {
      value: 'AREA',
      label: 'Area',
    },
    {
      value: 'LENGTH',
      label: 'Length',
    },
    {
      value: 'VOLUME',
      label: 'Volume',
    },
    {
      value: 'WEIGHT',
      label: 'Weight',
    },
  ]),
  quantityUnit: UnitPriceMeasurementMeasuredUnit,
  quantityValue: Utopia.numberControl(),
  referenceUnit: UnitPriceMeasurementMeasuredUnit,
  referenceValue: Utopia.numberControl(), // this can only be int
});

const Components = {
  '@shopify/hydrogen': {
    // https://shopify.dev/docs/api/hydrogen-react/2024-01/components/image
    Image: {
      component: Image,
      icon: 'image',
      properties: {
        aspectRatio: {
          control: 'string-input',
          label: 'AspectRatio (w/h)',
        },
        crop: ImageCropControl,
        data: ImageTypeControl,
        // loader is omitted, we don't have a control description for functions yet
        srcSetOptions: Utopia.objectControl({
          intervals: Utopia.numberControl(),
          startingWidth: Utopia.numberControl(),
          incrementSize: Utopia.numberControl(),
          placeholderWidth: Utopia.numberControl(),
        }),
      },
      variants: [
        {
          label: 'Image',
          imports: `import { Image } from '@shopify/hydrogen'`,
          code: "<Image style={{ height: 'auto' }} data={{ altText: 'Example image', url: 'https://cdn.shopify.com/s/files/1/0598/5959/9382/files/backpack-art-5.png', height: 'auto', }} />",
        },
      ],
    },
    Money: {
      component: Money,
      properties: {
        data: MoneyV2Control,
        withoutCurrency: BooleanSegmentControl,
        withoutTrailingZeros: BooleanSegmentControl,
        measurement: UnitPriceMeasurementControl,
        measurementSeparator: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'span',
              variants: [
                {
                  label: '/',
                  code: '<span>/</span>',
                },
                {
                  label: ' per ',
                  code: '<span> per </span>',
                },
              ],
            },
          ],
        },
      },
      variants: [
        {
          label: 'Money',
          imports: `import { Money } from '@shopify/hydrogen'`,
          code: '<Money data={{ amount: "9.99", currencyCode: "EUR" }} />',
        },
        {
          label: 'Money, with measurement',
          imports: `import { Money } from '@shopify/hydrogen'`,
          code: '<Money data={{ amount: "9.99", currencyCode: "EUR" }} measurement={{ referenceValue: 1, referenceUnit: "KG", }} />',
        },
        {
          label: 'Money, without currency',
          imports: `import { Money } from '@shopify/hydrogen'`,
          code: '<Money withoutCurrency data={{ amount: "9.99", currencyCode: "EUR" }} />',
        },
      ],
    },
  },
};

export default Components;
