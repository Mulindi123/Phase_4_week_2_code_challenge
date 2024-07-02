import { Outlet} from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    // BreadcrumbSeparator,
    Button
  } from '@chakra-ui/react'
import { ChevronRightIcon} from "@chakra-ui/icons"



function Landing(){
    return (
        <div className="">
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem p={4}>
                    <Button colorScheme='blue' p={4}><BreadcrumbLink href='/'>Restaurants</BreadcrumbLink></Button>
                </BreadcrumbItem>

                <BreadcrumbItem p={4}>
                    <Button colorScheme="blue" p={4}><BreadcrumbLink href='/pizzas'>Pizza</BreadcrumbLink></Button>
                </BreadcrumbItem>

                <BreadcrumbItem p={4}>
                    <Button colorScheme="blue" p={4}><BreadcrumbLink href='/restaurantPizzas'>Add Pizza</BreadcrumbLink></Button>
                </BreadcrumbItem>

                <BreadcrumbItem p={4}>
                    <Button colorScheme="blue" p={4} value={'outline'} className="m-2"><BreadcrumbLink href='/contact'>Contact</BreadcrumbLink></Button>
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}
export default Landing