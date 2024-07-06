import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../screens/Home"
import Anger from "../screens/Anger"
import Anxiety from "../screens/Anxiety"
import Disgust from "../screens/Disgust"
import Embarrassment from "../screens/Embarrassment"
import Ennui from "../screens/Ennui"
import Envy from "../screens/Envy"
import Fear from "../screens/Fear"
import Joy from "../screens/Joy"
import Sadness from "../screens/Sadness"
import CustomDrawerContent from "../components/CustomDrawerContent"

const { Navigator, Screen } = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        drawerStyle: { backgroundColor: "#021520" },
        drawerLabelStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "#021520" },
        headerTintColor: "#fff"
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Início",
          title: "Divertida Mente - Developers"
        }}
      />
      <Screen
        name="Joy"
        component={Joy}
        options={{
          drawerLabel: "Alegria",
          title: "Alegria"
        }}
      />
      <Screen
        name="Sadness"
        component={Sadness}
        options={{
          drawerLabel: "Tristeza",
          title: "Tristeza"
        }}
      />
      <Screen
        name="Anger"
        component={Anger}
        options={{
          drawerLabel: "Raiva",
          title: "Raiva"
        }}
      />
      <Screen
        name="Fear"
        component={Fear}
        options={{
          drawerLabel: "Medo",
          title: "Medo"
        }}
      />
      <Screen
        name="Disgust"
        component={Disgust}
        options={{
          drawerLabel: "Nojo",
          title: "Nojo"
        }}
      />
      <Screen
        name="Anxiety"
        component={Anxiety}
        options={{
          drawerLabel: "Ansiedade",
          title: "Ansiedade"
        }}
      />
      <Screen
        name="Embarrassment"
        component={Embarrassment}
        options={{
          drawerLabel: "Vergonha",
          title: "Vergonha"
        }}
      />
      <Screen
        name="Ennui"
        component={Ennui}
        options={{
          drawerLabel: "Tédio",
          title: "Tédio"
        }}
      />
      <Screen
        name="Envy"
        component={Envy}
        options={{
          drawerLabel: "Inveja",
          title: "Inveja"
        }}
      />
    </Navigator>
  )
}