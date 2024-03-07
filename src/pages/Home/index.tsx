import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FormContainer,
  InfoContainer,
  LogoTitleContainer,
  PageContainer,
} from "./styles";
import { StackNavigationProp } from "@react-navigation/stack/src/types";
import { ParamListBase } from "@react-navigation/native";
import LogoTitle from "@src/components/LogoTitle";
import RoundedContainer from "@src/components/RoundedContainer";
import Text from "@src/components/Text";
import { BrandsResponse, getAllBrands } from "@src/services/Brands/brands";
import Toast from "react-native-toast-message";
import LoadingContainer from "@src/components/LoadingContainer";
import { Picker } from "@src/components/Picker";
import { ModelsResponse, getModels } from "@src/services/ModelCar/models";
import { YearsResponse, getYears } from "@src/services/Year/years";
import Button from "@src/components/Button";
import {
  FipeVehicleResponse,
  getFipeVehicle,
} from "@src/services/FipeVehicle/vehicle";
import CustomModal from "@src/components/Modal";
import InfoTextModal from "@src/components/InfoTextModal";
import Flex from "@src/components/Flex";
import { useTheme } from "styled-components/native";
interface Props {
  navigation: StackNavigationProp<ParamListBase>;
}
interface Item {
  value: string;
  label: string;
}
const Home: React.FC<Props> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState<BrandsResponse[]>([]);
  const [models, setModels] = useState<ModelsResponse[]>([]);
  const [years, setYears] = useState<YearsResponse[]>([]);
  const [vehicleData, setVehicleData] = useState<FipeVehicleResponse>();
  const [brandSelected, setBrandSelected] = useState<Item>();
  const [modelSelected, setModelSelected] = useState<Item>();
  const [yearSelected, setYearSelected] = useState<Item>();
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    getAllBrands()
      .then((data) => {
        setBrands(data);
        setLoading(false);
      })
      .catch(() => {
        Toast.show({
          type: "error",
          text2: "Falha ao carregar as informações.",
          autoHide: true,
          visibilityTime: 15000,
          position: "top",
        });
        setLoading(false);
      });
  }, []);

  const showToastError = (text: string) => {
    Toast.show({
      type: "error",
      text2: text,
      autoHide: true,
      visibilityTime: 15000,
      position: "top",
    });
    setLoading(false);
  };

  const getModelFromBrand = (brandValue: string) => {
    if (!brandValue) {
      return;
    }
    setLoading(true);
    getModels(brandValue)
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch(() => {
        showToastError("Falha ao carregar as informações.");
      });
  };
  const getYearsFromModel = (modelValue: string) => {
    if (!brandSelected?.value || !modelValue) {
      return;
    }
    setLoading(true);
    getYears(brands[Number(brandSelected?.value)].codigo, modelValue)
      .then((data) => {
        setYears(data);
        setLoading(false);
      })
      .catch(() => {
        showToastError("Falha ao carregar as informações.");
      });
  };
  const getInfoVehicle = () => {
    if (
      !brandSelected?.value ||
      !modelSelected?.value ||
      !modelSelected?.value
    ) {
      return;
    }
    setLoading(true);
    getFipeVehicle(
      brands[Number(brandSelected?.value)].codigo,
      models[Number(modelSelected?.value)].codigo,
      years[Number(yearSelected?.value)].codigo
    )
      .then((data) => {
        setVehicleData(data);
        setOpenModal(true);
        setLoading(false);
      })
      .catch(() => {
        showToastError("Falha ao carregar as informações.");
      });
  };
  if (loading) {
    return <LoadingContainer />;
  }
  return (
    <PageContainer>
      <SafeAreaView>
        <InfoContainer>
          <LogoTitleContainer>
            <LogoTitle />
          </LogoTitleContainer>
          <Text
            label={"Consulte a Fipe de um veículo"}
            type="collapsableBold"
            textAlign="center"
          />
          <Flex pv={35} />
          <RoundedContainer />
          <FormContainer>
            <Text
              label={"Qual veículo você pretende consultar?"}
              type="collapsable"
              color={theme.colors.secondary}
            />
            <Flex pb={20} />
            <Picker
              placeholder={"Marca"}
              items={
                brands
                  ? brands.map((item: BrandsResponse) => ({
                      label: item.nome,
                      value: item.codigo,
                    }))
                  : []
              }
              value={brandSelected?.label}
              onValueChange={(value, index) => {
                setBrandSelected({ label: value, value: index.toString() });
                setModels([]);
                setModelSelected(undefined);
                if (value) {
                  getModelFromBrand(value);
                }
              }}
            />
            <Picker
              placeholder={"Modelo"}
              items={
                models
                  ? models.map((item: ModelsResponse) => ({
                      label: item.nome,
                      value: item.codigo,
                    }))
                  : []
              }
              value={modelSelected?.label}
              onValueChange={(value, index) => {
                setModelSelected({ label: value, value: index.toString() });
                setYears([]);
                setYearSelected(undefined);
                if (value) {
                  getYearsFromModel(value);
                }
              }}
            />
            <Picker
              placeholder={"Ano"}
              items={
                years
                  ? years.map((item: BrandsResponse) => ({
                      label: item.nome,
                      value: item.codigo,
                    }))
                  : []
              }
              value={yearSelected?.label}
              onValueChange={(value, index) => {
                setYearSelected({ label: value, value: index.toString() });
              }}
            />
            <Button
              label="Consultar"
              primary
              mt={30}
              name="magnifying-glass"
              onPress={() => getInfoVehicle()}
              disabled={
                !brandSelected?.label ||
                !modelSelected?.label ||
                !yearSelected?.label
              }
            />
            <CustomModal
              title={"Dados do veículo"}
              visible={openModal}
              onClose={() => {
                setOpenModal(!openModal);
              }}
            >
              <Flex mv={20}>
                <Text
                  label={vehicleData?.Modelo}
                  type="collapsable"
                  color={theme.colors.secondary}
                />
                <InfoTextModal title={"Marca"} label={vehicleData?.Marca} />
                <InfoTextModal title={"Ano"} label={vehicleData?.AnoModelo} />
                <InfoTextModal
                  title={"Combustível"}
                  label={vehicleData?.Combustivel}
                />

                <InfoTextModal
                  title={"Código Fipe"}
                  label={vehicleData?.CodigoFipe}
                />
                <InfoTextModal
                  title={"Mês de referência"}
                  label={vehicleData?.MesReferencia}
                />
                <InfoTextModal title={"Valor"} label={vehicleData?.Valor} />
              </Flex>
            </CustomModal>
          </FormContainer>
        </InfoContainer>
      </SafeAreaView>
    </PageContainer>
  );
};

export default Home;
