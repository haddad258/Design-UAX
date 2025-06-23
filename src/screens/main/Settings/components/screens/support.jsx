import React, { useState } from "react";

import { Template } from "@components/layout/Template";

import { SupportHome } from "../customs/support";
import { TicketCreate } from "../customs/support/create";
import { TicketDetail } from "../customs/support/detail";
import { TicketSuccess } from "../customs/support/success";
import { TicketAdd } from "../customs/support/add";

export const Support = ({ navigation }) => {
    const [state, setState] = useState('');
    const [detail, setDetail] = useState(null);

    let children;

    switch (state) {
        case '':
            children = <SupportHome
                navigation={navigation}
                setState={setState}
                setDetail={setDetail}
            />;
            break;
        case 'detail':
            children = <TicketDetail
                navigation={navigation}
                detail={detail}
                setState={setState}
                setDetail={setDetail}
            />;
            break;
        case 'create':
            children = <TicketCreate
                navigation={navigation}
                setState={setState}
            />
            break;
        case 'success':
            children = <TicketSuccess
                navigation={navigation}
                setState={setState}
            />
            break;
        case 'add':
            children = <TicketAdd
                navigation={navigation}
                setState={setState}
            />
            break;
        default:
            children
    }

    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            {children}
        </Template>
    )
}