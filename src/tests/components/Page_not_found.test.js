import React from "react";
import { shallow } from "enzyme";
import Page_not_found from "../../components/Page_not_found";

test("Should render Page_not_found", () => {
	const wrapper = shallow(<Page_not_found />);
	expect(wrapper).toMatchSnapshot();
});
	